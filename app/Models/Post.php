<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'content',
        'published_at',
    ];


    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function addPost($validData, $userId)
    {
        $post = new Post;
        $post->user_id = $userId;
        $post->category_id = $validData->category_id;
        $post->title = $validData->title;
        $post->content = $validData->content;
        $post->published_at = $validData->published_at;

        if ($validData->hasFile('file')) {
            $file = $validData->file('file')->storeAs(
                '/images/',
                $userId . time() . md5_file($validData->file('file')) . '.' . $validData->file('file')->extension(),
                'public'
            );
        }
        $post->img = $file;
        $post->save();
    }

    public static function updatePost($validData, $userId)
    {
        $post = Post::find($validData->id);
        $post->user_id = $userId;
        $post->category_id = $validData->category_id;
        $post->title = $validData->title;
        $post->content = $validData->content;
        $post->published_at = $validData->published_at;
        if ($validData->file('file')) {
            $file = $validData->file('file')->storeAs(
                '/images/',
                $userId . time() . md5_file($validData->file('file')) . '.' . $validData->file('file')->extension(),
                'public'
            );
            $post->img = $file;
        }
        $post->save();
    }
}
