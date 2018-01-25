Rails.application.routes.draw do
  root 'main#index'

  post 'savePosts' => 'main#savePosts'
  get 'getPosts' => 'main#getPosts'
  patch 'updatePosts/:id' => 'main#update'
end
