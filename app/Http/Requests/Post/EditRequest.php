<?php

namespace App\Http\Requests\Post;

use Illuminate\Foundation\Http\FormRequest;

class EditRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => ['integer', 'required'],
            'title' => ['bail', 'required', 'min:2', 'max:250', 'string'],
            'published_at' => ['string', 'nullable', 'min:10', 'max:250',],
            'category_id' => ['bail', 'required', 'integer', 'min:0'],
            'content' => ['bail', 'required', 'min:1', 'max:2000', 'string'],
            'file' => ['nullable'],
        ];
    }
}
