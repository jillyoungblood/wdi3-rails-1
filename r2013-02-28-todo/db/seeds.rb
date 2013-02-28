User.delete_all
Task.delete_all
Priority.delete_all

u1 = User.create(:name => 'bob', :email => 'bob@gmail.com', :password => 'a', :password_confirmation => 'a')
u2 = User.create(:name => 'sue', :email => 'sue@gmail.com', :password => 'a', :password_confirmation => 'a')
u3 = User.create(:name => 'sam', :email => 'sam@gmail.com', :password => 'a', :password_confirmation => 'a')

p1 = Priority.create(:name => 'high', :color => '#ff0000')
p2 = Priority.create(:name => 'medium', :color => '#00ff00')
p3 = Priority.create(:name => 'low', :color => '#0000ff')

t1 = Task.create(:title => 'Get milk', :description => 'Need milk now', :duedate => '3/3/2010', :is_complete => true)
t2 = Task.create(:title => 'Get bread', :description => 'No bread at home', :duedate => '1/9/2011')
t3 = Task.create(:title => 'Get laundry', :description => 'Dirty clothes!', :duedate => '5/2/2014')

t1.priority = p1
t1.save
t2.priority = p2
t2.save
t3.priority = p3
t3.save

u1.priorities << p1 << p2 << p3
u1.tasks << t1 << t2 << t3
