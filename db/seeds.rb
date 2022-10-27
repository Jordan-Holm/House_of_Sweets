Score.delete_all
Favorite.delete_all
House.delete_all
User.delete_all


5.times do |i|
    puts i
    @user = User.create(
        email: "test#{i}@email.com",
        image: Faker::Avatar::image,
        password: "password",
        name: "test_name#{i}",
        nickname: "test_user_name#{i}"
    )
    i++

    5.times do
        cities = [ "Lehi", "Provo", "Salt Lake City"]
        houses = [
            "https://images.unsplash.com/photo-1572006601208-66884fade3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
            "https://images.unsplash.com/photo-1572978306654-a3835dd40cd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
            "https://images.unsplash.com/photo-1583437624797-0e3348843acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
            "https://images.unsplash.com/photo-1509558848685-d51aecf76271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80",
            "https://images.unsplash.com/photo-1505904645664-def2335fb0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1501&q=80",
            "https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        ]
        @house = House.create(
            house_name: Faker::Name.last_name,
            address: Faker::Address.street_address,
            city: cities.sample,
            img: houses.sample,
            avg_candy: Faker::Number.decimal(l_digits: 1),
            avg_scary: Faker::Number.decimal(l_digits: 1)
        )
    end
end