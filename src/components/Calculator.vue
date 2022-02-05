<template>
  <div class="container">
    <div class="calculator">
      <div class="value" >
        <p ref="expression" :style="{ fontSize: inputFontSize + 'px' }">{{ input }}</p>
      </div>
      <!-- <input class="value calculator_display" type="text" name="text" :value=$store.state.input  /> -->
      <input
        class="button top"
        type="button"
        value="AC"
        v-if="input == ''"
        @click="clearButton()"
      />
      <input
        class="button top"
        type="button"
        value="C"
        v-else
        @click="clearButton()"
      />
      <input
        class="button top"
        type="button"
        value="⌫︁"
        @click="eraseToLeft()"
      />
      <input
        class="button top"
        type="button"
        value="%"
        @click="inputOperator('%')"
      />
      <input
        class="button right"
        type="button"
        value="÷"
        @click="inputOperator('÷')"
      />
      <input
        class="button numbers"
        type="button"
        value="7"
        @click="inputOperand('7')"
      />
      <input
        class="button numbers"
        type="button"
        value="8"
        @click="inputOperand('8')"
      />
      <input
        class="button numbers"
        type="button"
        value="9"
        @click="inputOperand('9')"
      />
      <input
        class="button right"
        type="button"
        value="&times;"
        @click="inputOperator('&times;')"
      />
      <input
        class="button numbers"
        type="button"
        value="4"
        @click="inputOperand('4')"
      />
      <input
        class="button numbers"
        type="button"
        value="5"
        @click="inputOperand('5')"
      />
      <input
        class="button numbers"
        type="button"
        value="6"
        @click="inputOperand('6')"
      />
      <input
        class="button right"
        type="button"
        value="-"
        @click="inputOperator('-')"
      />
      <input
        class="button numbers"
        type="button"
        value="1"
        @click="inputOperand('1')"
      />
      <input
        class="button numbers"
        type="button"
        value="2"
        @click="inputOperand('2')"
      />
      <input
        class="button numbers"
        type="button"
        value="3"
        @click="inputOperand('3')"
      />
      <input
        class="button right"
        type="button"
        value="+"
        @click="inputOperator('+')"
      />
      <input
        class="button zero numbers"
        type="button"
        value="0"
        @click="inputOperand('0')"
      />
      <input
        class="button numbers"
        type="button"
        value="."
        @click="inputDecimal()"
      />
      <input
        class="button right"
        type="button"
        value="="
        @click="calculation()"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      width: 280,
      inputFontSize: 24,
      initialInputFontSize: 24,
    };
  },
  methods: {
    inputOperand(operand) {
      this.input += operand;

      this.adjustInputFontSize();
    },

    inputOperator(operator) {
      //this.input += operator;
      const operands = ["+", "-", "×", "÷", "%"];

      if (!operands.includes(this.input[this.input.length - 1])) {
        this.input += operator;
      } else {
        this.input = this.input.substring(0, this.input.length - 1) + operator;
      }

      this.adjustInputFontSize();
    },

    inputDecimal() {
      this.input += ".";
    },

    clearButton() {
      this.input = "";
    },

    eraseToLeft() {
      this.input = this.input.substring(0, this.input.length - 1);
    },

    calculation() {
      let expression = this.input;
      let nums = [];
      let ops = [];
      const operands = ["+", "-", "×", "÷", "%"];

      for (let i = 0; i < expression.length; i++) {
        // if (isNaN(expression[i])
        if (operands.includes(expression[i])) {
          //console.log(expression[i]);
          let currOP = expression[i];
          while (
            ops.length > 0 &&
            this.getPriority(currOP) <= this.getPriority(ops[ops.length - 1])
          ) {
            this.process(nums, ops[ops.length - 1]);
            ops.pop();
          }
          ops.push(currOP);
        } else {
          let number = "";
          while (i < expression.length && !operands.includes(expression[i])) {
            number += expression[i];
            i++;
          }
          i--;
          console.log(number);
          nums.push(number);
        }
      }

      while (ops.length > 0) {
        this.process(nums, ops[ops.length - 1]);
        ops.pop();
      }
      nums[0] = Math.floor(nums[0] * 100000) / 100000;
      //console.log(nums[0]);
      this.input = nums[0];
    },

    process(stack, op) {
      const right = parseFloat(stack.pop());
      const left = parseFloat(stack.pop());
      //console.log(right);
      //console.log(left);

      let value = 0;

      switch (op) {
        case "+":
          value = left + right;
          break;
        case "-":
          value = left - right;
          break;
        case "×":
          value = left * right;
          break;
        case "%":
          value = left % right;
          break;
        case "/":
          value = Math.floor(left / right);
          break;
      }
      // 計算した結果は、次の演算子での計算のため再度スタックに入れます。
      stack.push(value);
    },

    getPriority(op) {
      if (op == "+" || op == "-") return 1;
      else if (op == "×" || op == "/") return 2;
    },

    // if (this.isDisplaySizeFull() && this.displayStyle.inputFontSize > 5) this.displayStyle.inputFontSize--;
    // else if (this.displayStyle.inputFontSize < this.displayStyle.initialInputFontSize) this.displayStyle.inputFontSize++;
    adjustInputFontSize() {
      if (this.isDisplaySizeFull() && this.inputFontSize > 5)
        this.inputFontSize--;
      else if (this.inputFontSize < this.initialInputFontSize)
        this.inputFontSize++;
    },

    isDisplaySizeFull() {
      const targetWidth = this.$refs.expression.offsetWidth;
      console.log(targetWidth);
      const displayWidth = this.width - 60;
      return targetWidth > displayWidth;
    },
  },
};
// setup() {
//   // const store = useStore(); // same as this.$store

//   const input = ref('dfsdfsdf');

//   const inputOperand = (operand) =>{
//     this.input += operand;
//   };

//   const inputOperator = (operator) =>{
//     this.input += operator;
//   };

//   const inputDecimal = () =>{
//     this.input += '.';
//   };

//   const clearButton = () =>{
//     this.input = '';
//   };

//   const eraseToLeft = () =>{

//   };

//   const calculation = () =>{

//   };

//   return {
//     input,
//     inputOperand,
//     inputOperator,
//     inputDecimal,
//     clearButton,
//     eraseToLeft,
//     calculation
//   }

// },
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
  width: 232px;
  height: 320px;
}

.calculator .value {
  grid-column: span 4;
  height: 60px;
  text-align: right;
  vertical-align: center;
  border: none;
  outline: none;
  padding: 10px;
  /* font-size: 20px; */
  color: #fff;
}

/* .value p {
  font-size-adjust: revert;
} */

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
  height: 48px;
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

.value {
  background: #2a2d2f;
}

.right {
  background: #ff9f0a;
}

.top {
  background: #3e4143;
}

.numbers {
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