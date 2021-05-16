# tCarousel-js by @ovatlh
Easy dynamic carousel 

![tCarousel](https://raw.githubusercontent.com/ovatlh/tCarousel-js/main/assets/tcarousel-js.PNG)

## Basics
#### Add css and js references

    <head>
      <!-- tCarousel assets -->
      <link rel="stylesheet" href="css/tCarousel.css">
      <script src="js/tCarousel.js" defer></script>
      <!-- tCarousel assets -->
    </head>
#### Recommended CSS (optional)

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

### Basic HTML

    <div class="t-carousel t-h" id="any-unique-id">
      <div class="t-items">
        <div class="t-item">
          <p>Content-01</p>
        </div>

        <div class="t-item">
          <p>Content-02</p>
        </div>

        <div class="t-item">
          <p>Content-03</p>
        </div>
		...
      </div>

      <button class="t-btn t-left">
        ◀
      </button>
      <button class="t-btn t-right">
        ▶
      </button>
      <button class="t-btn t-up">
        🔼
      </button>
      <button class="t-btn t-down">
        🔽
      </button>
    </div>

## Usage
I recommend to see the [demo](https://ovatlh.github.io/apps/tCarousel/) and check out the html code 

To display the buttons horizontally or vertically, you need to add a class

    t-h | Displays horizontal buttons
	<div class="t-carousel t-h" id="any-unique-id">
	
    t-v | Displays vertical buttons
    <div class="t-carousel t-v" id="any-unique-id">

It is important to add an **id** to work.

    <div class="t-carousel t-h" id="any-unique-id">

For the automatic mode it is important to add 2 "data-" attributes.

    data-tc-time-seg="10"
    data-tc-direction="direction" left|right|up|down

#### `data-tc-time-seg`
These are the seconds it takes to change to the next element. You can set as many seconds as you want.
#### `data-tc-direction="direction"`direction=left | right | up | down
Specifies the direction for automatic change

#### tInit() - Add basic functionality

    tCarousel.tInit();
It is possible to indicate whether informative messages are displayed. By default they are not displayed.

    tCarousel.tInit({ show_Messages: true});

#### tClear() - Removing basic functionality

    tCarousel.tClear();
By using **tClear()**, both timers and button events are cleared.
But you can specify if you only want to clear the timers and you want to keep the functionality of the buttons

    tCarousel.tClear({ only_Automatic: true});

## Important
If no **id** is specified, the carousel will not work, the buttons will not react when clicked.

    <div class="t-carousel t-h" id="any-unique-id">

In automatic mode, it is important to specify the **seconds**, the **direction** and the **id**.

    <div class="t-carousel t-h" id="any-unique-id" data-tc-time-seg="10" data-tc-direction="right">

When changing the "t-item", some classes are added to the elements inside the container div with class "t-items" to animate the input and output.

    <div class="t-carousel t-h" id="any-unique-id" data-tc-time-seg="10" data-tc-direction="down">
      <div class="t-items">		<--- !t-items container
        <div class="t-item">		<---!t-item
          <p>Content-01</p>				<---!tyour content
        </div>

        <div class="t-item">
          <p>Content-02</p>
        </div>

        <div class="t-item">
          <p>Content-03</p>
        </div>
		...
      </div>

      <button class="t-btn t-left">
        ◀
        ...
    </div>
|Class| Description |
|--|--|
| t-active | Indicator to know which is the active item |
| t-h-in-**direction** | Class for animation from the left or right as the next item to **display**. *direction*: left, right |
| t-h-out-**direction** | Class for animation from left or right as the next element to **hide**. *direction*: left, right|
| t-v-in-**direction** | Class for animation from the up or down as the next item to **display**. *direction*: up, down |
| t-v-out-**direction** | Class for animation from up or down as the next element to **hide**. *direction*: up, down|


#### Steps when adding classes for animations

 1. **All t-item classes are deleted.**
 2. The "t-item" class is added.
 3. The class for the output animation is added. **(t-h-out-direction | t-v-out-direction)**
 4. The class "t-active" is added.
 5. The class for the input animation is added. **(t-h-in-direction | t-v-in-direction)**

*I think there are many things that can be improved, I keep working to improve it.
Any kind of help is accepted, cheers ✌..*
