<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class VoteController extends Controller
{
    public function rating(Post $rating, Request $request)
    {
        $res = $rating->users()->avg('rating');

        return response()->json($res, 200);
    }

    public function vote(Post $vote, User $user)
    {
        $userId = $user->id;
        $res = $vote->users()->where('user_id', $userId);
        // dump($res);
        return response()->json($res->get(), 200);
    }
}
