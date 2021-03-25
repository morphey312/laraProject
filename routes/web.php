<?php

use App\Http\Controllers\PostController;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get(
    '/{any}',
    [PostController::class, 'index']
)->where('any', '.*');

Auth::routes();

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/test', function () {

//     $post = Post::with('category')->get();
//     dump($post);
//     dump(response()->json($post));
// });

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
