# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

def onlyOdds1 array
  odds = array.select do |value|
    # class is different than typeof in that it literally returns the class
    value.class == Integer && value.odd?
  end
  odds.sort
end
p onlyOdds1 fullArr1
p onlyOdds1 fullArr2

# --OR--
def onlyOdds2 array
  array.select { |value| value.class == Integer && value%2 != 0 }.sort
end
p onlyOdds2 fullArr1
p onlyOdds2 fullArr2

# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.

class Bike
  def initialize model, frame_size
    @model = model
    @wheels = 2
    @frame_size = frame_size
    @speed = 0
    @bell = 'Beep beep!'
  end
  def get_info
    "The #{@model} bike has #{@wheels} wheels and a #{@frame_size} frame."
  end
  def bell
    @bell = "The bell goes #{@bell}"
  end
  def speed
    @speed
  end
  def pedal_faster mph
    @speed = @speed + mph
  end
  def brake mph
    if @speed > mph
      @speed = @speed - mph
    else
      @speed = 0
    end
  end
end

my_bike = Bike.new 'Trek', '168cm'
p my_bike.get_info

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.

p my_bike.bell

# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.

p my_bike.speed


# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

p my_bike.speed
my_bike.pedal_faster 30
p my_bike.speed


p my_bike.speed
my_bike.brake 10
p my_bike.speed
my_bike.brake 30
p my_bike.speed

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0



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

my_bike2 = Bike.new 'Beach crusier', '160cm'
my_bike3 = Bike.new 'Beach crusier', '163cm'
my_bike_rack = BikeRack.new
my_bike_rack.add_bike my_bike.get_info
my_bike_rack.add_bike my_bike2.get_info
my_bike_rack.add_bike my_bike3.get_info

p my_bike_rack.bike_rack_info


# OTHER OPTIONS FOR ASSESSMENT QUESTIONS



# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'soda water']

def finder(array, letter)
  array.select{|word| word.include? letter}
end
p finder beverages_array, letter_o
p finder beverages_array, letter_a
p finder beverages_array, 'f'
p finder beverages_array, 'j'


# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

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

# -------------------4) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sums array
  array.sum
end
p sums nums_array1
p sums nums_array2

# -------------------5) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# STRETCH
is_palindrome4 = 'Was it a cat I saw'
# Expected output: Was it a cat I saw is a palindrome'

def palCheck string
  if string.downcase.reverse.delete(' ') == string.downcase.delete(' ')
    return "#{string} is a palindrome"
  else
    return "#{string} is not a palindrome"
  end
end

p palCheck is_palindrome1
p palCheck is_palindrome2
p palCheck is_palindrome3
p palCheck is_palindrome4
