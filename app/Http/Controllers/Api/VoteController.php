<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class VoteController extends Controller
{
    public function rating(Post $rating, Request $request)
    {
        $res =$rating->users()->avg('rating');


        return response()->json($res, 200);
    }
}
