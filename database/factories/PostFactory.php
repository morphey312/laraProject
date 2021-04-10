<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->randomDigitNotNull,
            'category_id' => $this->faker->randomDigitNotNull,
            'title' => $this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'content' => $this->faker->text($maxNbChars = 400),
            'published_at' => now(),
            'img' => 'images//' . ($this->faker->image($dir = 'storage\app\public\images', $width = 640, $height = 480, 'cats', false)),
        ];
    }
}
