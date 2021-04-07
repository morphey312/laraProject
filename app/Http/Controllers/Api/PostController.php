<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\StoreRequest;
use App\Http\Requests\Post\EditRequest;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

class PostController extends Controller
{
    public function index()
    {
        return view('layouts.vue');
    }

    public function post($id)
    {
        $post = Post::with(['user', 'category'])->where('id', $id)->get();
        return response()->json($post);
    }

    public function getAll()
    {
        $allPosts = Post::with(['user', 'category'])->get();
        return response()->json($allPosts);
    }

    public function pagination()
    {
        $perPage = Post::with(['user', 'category'])->paginate(3);
        return response()->json($perPage);
    }

    public function authorPosts($user_id)
    {
        $posts = Post::with(['user', 'category'])->where('user_id', $user_id)->get();
        return response()->json($posts);
    }

    public function categoryPosts($category_id)
    {
        $posts = Post::with(['user', 'category'])->where('category_id', $category_id)->get();
        return response()->json($posts);
    }

    public function getOrderPosts(Request $request)
    {
        $orderPosts = Post::orderBy('published_at', 'desc')->limit('5')->get();
        return response()->json($orderPosts);
    }

    public function get(Request $request)
    {
        $posts = Post::orderBy('created_at', 'desc')->get();
        return response()->json($posts);
    }

    public function store(StoreRequest $request)
    {
        $post = new Post;
        $post->user_id = $request->user()->id;
        $post->category_id = $request->category_id;
        $post->title = $request->title;
        $post->content = $request->content;
        $post->published_at = $request->published_at;

        if ($request->hasFile('file')) {
            $file = $request->file('file')->storeAs(
                '/images/',
                $request->user()->id . time() . md5_file($request->file('file')) . '.' . $request->file('file')->extension(),
                'public'
            );
        }
        $post->img = $file;
        $post->save();

        return response()->json($post, 201);
    }

    public function edit(EditRequest $request)
    {
        $validData = $request;
        Post::updatePost($validData, $request->user()->id);

        return response()->json($request, 201);
    }

    public function delete($id)
    {
        Post::destroy($id);

        return response()->json("ok");
    }
}
