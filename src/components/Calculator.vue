<template>
  <div class="container">
    <div class="calculator">
      <div class="value ">
        {{ $store.state.input}}
      </div>
      <!-- <input class="value calculator_display" type="text" name="text" :value=$store.state.input  /> -->
      <input class="button top" type="button" value="AC" />
      <input class="button top" type="button" value="⌫︁" />
      <input class="button top" type="button" value="%" />
      <input class="button right" type="button" value="÷" />
      <input class="button numbers" type="button" value="7" />
      <input class="button numbers" type="button" value="8" />
      <input class="button numbers" type="button" value="9" />
      <input class="button right" type="button" value="&times;" />
      <input class="button numbers" type="button" value="4" />
      <input class="button numbers" type="button" value="5" />
      <input class="button numbers" type="button" value="6" />
      <input class="button right" type="button" value="-" />
      <input class="button numbers" type="button" value="1" />
      <input class="button numbers" type="button" value="2" />
      <input class="button numbers" type="button" value="3" />
      <input class="button right" type="button" value="+" />
      <input class="button zero numbers" type="button" value="0" />
      <input class="button numbers" type="button" value="." />
      <input class="button right" type="button" value="=" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    
  },

}
</script>

  <!-- <td colspan="5">
        <input type="text" class="display-box" id="result" disabled />
      </td>
    
    <tr>
      display() function display the value of clicked button
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
    </tr> -->


<style scoped>

/* 
.v-text-field input {
    font-size: 2.3;
} */

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
}

.calculator {
  position: relative;
  display: grid;

  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.3);
  border-radius: 0.5em;
  overflow: hidden;
}

.calculator .value {
  grid-column: span 4;
  height: 70px;
  text-align: right ;
  vertical-align: center;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 20px;
  color: #fff;
}

/* .calculator__display {
  background-color: var(--grey-900);
  color: var(--grey-050);
  width: 16.25rem;
  padding: 0.75rem 1rem;
  text-align: right;
  font-size: calc(1rem * 1.2 * 1.2);
} */

.calculator .button {
  display: grid;
  width: 60px;
  height: 60px;
  color: #fff;
  place-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.calculator .button:active {
  background: hsl(107, 11%, 84%);
  color: #111;
}

.calculator .zero {
  grid-column: span 2;
  width: 120px;
}

.value{
  background: #2a2d2f;
}

.right{
  background: #ff9f0a;
}

.top{
  background: #3e4143;
}

.numbers{
  background: #5f6062;
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