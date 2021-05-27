# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def finder(array, letter)
  array.select{|word| word.include? letter}
end
p finder beverages_array, letter_o
p finder beverages_array, letter_t
p finder beverages_array, 'f'
p finder beverages_array, 'j'


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_remover string
  string.delete('aeiouAEIOU')
end

p vowel_remover album1
p vowel_remover album2
p vowel_remover album3


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
  attr_accessor :current_speed
  def initialize model
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  def get_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
  def pedal_faster mph
    @current_speed = @current_speed + mph
  end
  def brake mph
    if @current_speed > mph
      @current_speed = @current_speed - mph
    else
      @current_speed = 0
    end
  end
end

trek = Bike.new 'Trek'
p trek.get_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

p trek.current_speed
trek.pedal_faster 30
p trek.current_speed

p trek.current_speed
trek.brake 10
p trek.current_speed
trek.brake 30
p trek.current_speed


# Add our own stretch challenge to play with the shovel operator

class BikeRack
  def initialize
    @bike_list=[]
  end
  def add_bike bike
    @bike_list << bike
  end
  def bike_rack_info
    @bike_list
  end
end

my_bike1 = Bike.new 'Single Speed'
my_bike2 = Bike.new 'Beach Crusier'
my_bike3 = Bike.new 'Racer'
my_bike_rack = BikeRack.new
my_bike_rack.add_bike my_bike1.get_info
my_bike_rack.add_bike my_bike2.get_info
my_bike_rack.add_bike my_bike3.get_info

p my_bike_rack.bike_rack_info
