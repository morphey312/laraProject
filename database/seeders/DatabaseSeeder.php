<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\PostsTags;
use App\Models\Tag;
use App\Models\User;
use App\Models\Vote;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            PostSeeder::class,
            TagSeeder::class,
            VoteSeeder::class,
            PostsTagsSeeder::class,
        ]);
        DB::insert('insert into roles (name) values ("administrator")');
        DB::insert('insert into roles (name) values ("author")');
    }
}
