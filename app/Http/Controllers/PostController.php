<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::latest()->get()->map(function ($post) {
            return [
                'id' => $post->id,
                'title' => $post->title,
                'body' => $post->body,
                'showUrl' => route('posts.show', $post),
                'editUrl' => route('posts.edit', $post),
            ];
        });

        return Inertia::render('Index', [
            'posts' => $posts
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Create', [
            'backUrl' => route('posts.index'),
            'storUrl' => 'posts.store',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $post = new Post();
        $post->title = $request->title;
        $post->body = $request->body;
        $post->save();

        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return Inertia::render('Show', [
            'post' => $post,
            'backUrl' => route('posts.index')
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return Inertia::render('Edit', [
            'post' => $post,
            'backUrl' => route('posts.index'),
            'updateUrl' => route('posts.update', $post),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string|max:255',
        ]);

        $post->title = $request->title;
        $post->body = $request->body;
        $post->save();

        $post = [
            'id' => $post->id,
            'title' => $post->title,
            'body' => $post->body,
            'showUrl' => route('posts.show', $post),
            'editUrl' => route('posts.edit', $post),
            'deleteUrl' => route('posts.destroy', $post),
            'message' => 'Post updated successfully.'
        ];

        return back()->with('message', 'Post Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
