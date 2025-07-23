<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ImageController;
use Illuminate\Support\Facades\Route;

Route::apiResource('blogs', BlogController::class);

Route::post('image', [ImageController::class, 'uploadImage']);

