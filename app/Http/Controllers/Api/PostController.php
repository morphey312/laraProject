<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Post\StoreRequest;
use App\Http\Requests\Post\EditRequest;
use App\Models\Category;
use App\Models\Post;
use App\Policies\PostPolicy;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Auth\AuthenticationController;

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
        $posts = Post::with(['user', 'category'])->where('user_id', $user_id)->OrderBy('id', 'desc')->paginate(3);
        return response()->json($posts);
    }

    public function categoryPosts($category_id)
    {
        $posts = Post::with(['user', 'category'])->where('category_id', $category_id)->paginate(3);
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
        $validData = $request;
        Post::addPost($validData, $request->user()->id);

        return response()->json($request, 201);
    }

    public function edit(EditRequest $request)
    {
        $post = (new Post)::find($request->id);
        $this->authorize('update', $post);
        $validData = $request;
        Post::updatePost($validData, $request->user()->id);

        return response()->json($request, 201);
    }

    public function delete(Request $request)
    {
        $post = (new Post)::find($request->id);
        $this->authorize('delete', $post);
        Post::destroy($request->id);
        Storage::disk('public')->delete($post->img);
        return response()->json("ok");
    }
}
