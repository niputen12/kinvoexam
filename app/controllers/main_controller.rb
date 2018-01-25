class MainController < ApplicationController

	def index
		 redirect_to '/acme_homepage.html'
	end

	def savePosts
		post = Main.new(saveParams)

		if post.save
			render json: {status: 'Success', message: 'Pawer', data:post},status: :ok
		else
			render json: {status: 'Error', message: 'error', data:Main.error},status: :unprocessable_entity
		end

	end

	def saveParams
		params.permit(:postId, :tags, :reply,:pmReply, :done)
	end

	def getPosts
		post = Main.all()
		render json:{data: post},status: :ok
	end


	def update
		update = Main.find(params[:id])
		if update.update_attributes(update_params)
			render json:{message: 'success'},status: :ok
		else
			render json: {status: 'Error', message: 'error'},status: :unprocessable_entity
		end
	end

	def update_params
		params.permit(:done)
	end
end
