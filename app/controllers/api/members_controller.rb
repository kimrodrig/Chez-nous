class Api::MembersController < ApplicationController
    
    def index
        render json: Member.all
    end
    
    def create
        member = Member.new(member_params)
        if member.save
            render json: member, status: :created
        else
            render json: { message: "Validation failed", errors: member.errors }, status: 400
        end
    end

    private

    def member_params
        params.require(:member).permit(:name, :email, :phone)
    end
end
