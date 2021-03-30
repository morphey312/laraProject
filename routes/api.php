<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CategoryController;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', [AuthController::class, 'login']);



Route::get('posts', [PostController::class, 'get']);
Route::get('allPosts', [PostController::class, 'getAll']);
Route::get('curentPage', [PostController::class, 'pagination']);
Route::get('authorPosts/{user_id}', [PostController::class, 'authorPosts']);
Route::get('categoryPosts/{category_id}', [PostController::class, 'categoryPosts']);
Route::get('orderPosts', [PostController::class, 'getOrderPosts']);
Route::get('single/{id}', [PostController::class, 'post']);
Route::post('posts', [PostController::class, 'store']);
Route::delete('posts/{id}', [PostController::class, 'delete']);

Route::get('categories', [CategoryController::class, 'get']);
