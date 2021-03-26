<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;

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

    public function getAll(Request $request)
    {
        $allPosts = Post::with(['user', 'category'])->get();
        return response()->json($allPosts);
    }

    public function pagination(Request $request)
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

    public function store(Request $request)
    {
        $post = Post::create($request->all());

        return response()->json($post);
    }

    public function delete($id)
    {
        Post::destroy($id);

        return response()->json("ok");
    }
}
