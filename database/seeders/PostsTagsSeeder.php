<?php

namespace Database\Seeders;

use App\Models\PostsTags;
use Illuminate\Database\Seeder;

class PostsTagsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PostsTags::factory(20)->create();
    }
}
