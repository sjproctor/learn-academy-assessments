# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

def onlyOdds1 array
  odds = array.select do |value|
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
    @bell = bell
    @speed = 0
  end
  def get_info
    "The #{@model} bike has #{@wheels} wheels and a #{@frame_size} frame."
  end
  def bell
    @bell = 'Beep beep!'
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
