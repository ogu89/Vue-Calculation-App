<template>
  <table class="calculator">
    <tr>
      <td colspan="3">
        <input type="text" class="display-box" id="result" disabled />
      </td>
    </tr>
    <tr>
      <!-- display() function display the value of clicked button -->
      <td>
        <input class="button" type="button" value="AC" />
      </td>
      <td>
        <input class="button" type="button" value="⌫︁" />
      </td>
      <td>
        <input class="button" type="button" value="%" />
      </td>
      <td>
        <input class="button" type="button" value="÷" />
      </td>
    </tr>
    <tr>
      <td>
        <input class="button" type="button" value="7" />
      </td>
      <td>
        <input class="button" type="button" value="8" />
      </td>
      <td>
        <input class="button" type="button" value="9" />
      </td>
      <td>
        <input class="button" type="button" value="×" />
      </td>
    </tr>
    <tr>
      <td>
        <input class="button" type="button" value="4" />
      </td>
      <td>
        <input class="button" type="button" value="5" />
      </td>
      <td>
        <input class="button" type="button" value="6" />
      </td>
      <td>
        <input class="button" type="button" value="-" />
      </td>
    </tr>
    <tr>
      <td>
        <input class="button" type="button" value="1" />
      </td>
      <td>
        <input class="button" type="button" value="2" />
      </td>
      <td>
        <input class="button" type="button" value="3" />
      </td>
      <td>
        <input class="button" type="button" value="+" />
      </td>
    </tr>
    <tr>
      <td>
        <input class="button" type="button" value="0" />
      </td>
      <td>
        <input class="button" type="button" value="." />
      </td>
      <td>
        <input class="button" type="button" value="=" />
      </td>
    </tr>
  </table>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
.calculator {
  padding: 10px;
  border-radius: 1em;
  height: 325px;
  width: 220px;
  margin: auto;
  background-color: #191b28;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.display-box {
  font-family: "Orbitron", sans-serif;
  background-color: #2a2d2e;
  border: solid black 0.5px;
  color: black;
  border-radius: 5px;
  width: 100%;
  height: 65%;
}
.button {
  font-family: "Orbitron", sans-serif;
  background-color: #646768;
  color: white;
  border: solid black 0.5px;
  width: 100%;
  border-radius: 5px;
  height: 70%;
  outline: none;
}
.button:active {
  background: #e5e5e5;
  -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
  -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
  box-shadow: inset 0px 0px 5px #c1c1c1;
}
</style>

<!-- <div id="calculation-app">
            <div class="bg-black white">

                <p>input: {{ input }}</p>
                <p>answer: {{ answer }}</p>
            </div>

            <div class="buttons d-flex justify-content-center flex-wrap mb-4" style="width: 300px; padding-top:10px;">
                <button v-on:click="inputOperand('1')">1</button>
                <button v-on:click="inputOperand('2')">2</button>
                <button v-on:click="inputOperand('3')">3</button>
                <button v-on:click="inputOperand('4')">4</button>
                <button v-on:click="inputOperand('5')">5</button>
                <button v-on:click="inputOperand('6')">6</button>
                <button v-on:click="inputOperand('7')">7</button>
                <button v-on:click="inputOperand('8')">8</button>
                <button v-on:click="inputOperand('9')">9</button>
                <button v-on:click="inputOperand('0')">0</button>
                <button v-on:click="inputOperator('+')">+</button>
                <button v-on:click="inputOperator('-')">-</button>
                <button v-on:click="inputOperator('×')">×</button>
                <button v-on:click="inputOperator('÷')">÷</button>
                <button v-on:click="inputOperator('%')">%</button>
                <button v-on:click="caliculation">=</button>
                <button v-on:click="inputDecimal()">.</button>
                <button  v-if="input == ''">AC</button>
                <button v-on:click="clearButton()"  v-else>C</button>
                <button v-on:click="eraseToLeft()">⌫︁</button>
                
            </div>
        </div> -->