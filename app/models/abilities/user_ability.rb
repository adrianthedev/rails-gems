class UserAbility
  include CanCan::Ability

  def initialize(user)
    can :read, Gemm
    can :like, Gemm

    can :read, User

    can :read, Tag

    can :read, Like
    can :create, Like
    can :update, Like, user_id: user.id
    can :destroy, Like, user_id: user.id
  end

end
