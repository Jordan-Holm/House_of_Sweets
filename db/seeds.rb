Score.delete_all
Favorite.delete_all
House.delete_all
User.delete_all


5.times do |i|
    puts i
    @user = User.create(
        email: "test#{i}@email.com",
        password: "password",
        name: "test_name#{i}",
        nickname: "test_user_name#{1}"
    )
    i++

    10.times do
        @house = House.create(
            house_name: Faker::Name.last_name,
            address: Faker::Address.street_address,
            city: Faker::Fantasy::Tolkien.location,
            img: Faker::Avatar::image,
            avg_candy: Faker::Number.decimal(l_digits: 2),
            avg_scary: Faker::Number.decimal(l_digits: 2)
        )
    end
end