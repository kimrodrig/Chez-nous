class Api::MembersController < ApplicationController
    
    def index
        render json: Member.all
    end
    
    def show
        member = Member.find(params[:id])
        render json: member
    end

    def create
        member = Member.new(member_params)
        if member.save
            render json: member, status: :created
        else
            render json: { message: "Validation failed", errors: member.errors }, status: 400
        end
    end

    def get_member_by_phone
        member = Member.find_by(phone: member_params[:phone])
        if member
            render json: member, status: :ok
        else
            render json: { message: "number not found"}, status: 400
        end
    end

    def destroy
        member = Member.find(params[:id])
        member.destroy
    end
    
    private

    def member_params
        params.require(:member).permit(:name, :email, :phone)
    end
end
