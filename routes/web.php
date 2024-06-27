<?php

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/', function () {
    return Inertia::render('Home', [
        'posts' => Post::get()->take(1)
    ]);
});

Route::resource('/posts', PostController::class);