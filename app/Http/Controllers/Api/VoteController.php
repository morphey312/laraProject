<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\User;
use App\Models\PostUser;
use Illuminate\Http\Request;

class VoteController extends Controller
{
    public function rating(Post $rating, Request $request)
    {
        $res = $rating->users()->avg('rating');

        return response()->json($res, 200);
    }

    public function vote(Post $vote, User $user, Request $request)
    {
        $res = 0;
        $arr = $vote->users->all();

        foreach ($arr as $item) {
            if ($item->pivot->user_id == $user->id) {
                $res = ($item->pivot->rating);
                return response()->json('You voted for this post on ' . $res . ' stars', 200);
            }
        };
        if ($res == 0) {
            $vote->users()->attach($user->id, ['rating' => "{$request->rating}"]);
            return response()->json('You`ve voted for this post on ' . $request->rating . ' stars', 200);
        };
    }
}
