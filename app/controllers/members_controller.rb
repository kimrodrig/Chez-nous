class MembersController < ApplicationController
    
    def index
        render json: Member.all
    end
    
    def create
        member = Member.create!(member_params)
        render json: member, status: :created
    end

    private

    def member_params
        params.permit(:name, :email, :phone)
    end
end
