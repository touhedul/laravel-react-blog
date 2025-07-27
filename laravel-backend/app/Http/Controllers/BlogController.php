<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use App\Http\Resources\BlogResource;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $blogs = Blog::when($request->has('search'), function ($query) use ($request) {
            $query->where('title', 'like', '%' . $request->input('search') . '%');
        })->get();
        return BlogResource::collection($blogs);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        $blog = Blog::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'image' => $request->file('image')->store('images', 'public'),
            'author' => $request->input('author')
        ]);
        return new BlogResource($blog);
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        return new BlogResource($blog);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        // return $request;
        $blog->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'image' => $request->file('image') ? $request->file('image')->store('images', 'public') : $blog->image,
            'author' => $request->input('author')
        ]);
        return new BlogResource($blog);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        $blog->delete();
        return response()->noContent();
    }
}
