<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageController extends Controller
{
    //

    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|mimes:jpeg,png,jpg,gif,pdf|max:2048',
        ]);
        $image = $request->file('image');

        if ($image) {
            $path = $image->store('images', 'public');
            return response()->json(['path' => $path], 201);
        }

        return response()->json(['error' => 'No image uploaded'], 400);
    }
}
