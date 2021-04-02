<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::with(['role'])->whereEmail($request->username)->first();

        if (!$user) {
            return response()->json([
                'message' => 'Wrong email or password',
                'status' => 422
            ], 422);
        }

        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Wrong email or password',
                'status' => 422
            ], 422);
        }

        if (!$user->role->name == 'administrator') {
            return response()->json([
                'message' => 'You has not access to admin panel',
                'status' => 403
            ], 403);
        }

        $client = DB::table('oauth_clients')
            ->where('password_client', true)
            ->first();

        if (!$client) {
            return response()->json([
                'message' => 'Laravel Passport is not setup properly.',
                'status' => 500
            ], 500);
        }

        $data = [
            'grant_type' => 'password',
            'client_id' => $client->id,
            'client_secret' => $client->secret,
            'username' => $request->username,
            'password' => $request->password,
        ];

        $request = Request::create('/oauth/token', 'POST', $data);

        $response = app()->handle($request);
        // Проверяем был ли внутренний запрос успешным
        if ($response->getStatusCode() != 200) {
            return response()->json([
                'message' => 'Wrong email or password',
                'status' => 422
            ], 422);
        }
        // Вытаскиваем данные из ответа
        // $data = json_decode($response->getContent(), true);
        // Формируем окончательный ответ в нужном формате
        // return response()->json([
        //     'token' => $data['access_token'],
        //     'refresh_token' => $data['refresh_token'],
        //     'user' => $user,
        //     'status' => 200
        // ]);
        $response = $request->user();
        return response()->json(json_decode($response->getContent(), true));
    }
}
