<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-3xl text-green-700 text-center">Calculator Applicatoin</h1>
      <hr />
      <p
        class="p-2 text-right text-3xl text-gray-600 border rounded h-20 mt-5"
        style="direction: rtl"
      >
        {{ currentNums }}
      </p>
      <small v-if="previousNums"
        >{{ previousNums }} {{ currentOperator }} {{ currentNums }}</small
      >
      <div class="w-full">
        <div class="mt-5 grid grid-cols-4 gap-2">
          <button
            @click="pressed('1')"
            class="border text-gray-600 text-center p-2 rounded shadow text-2xl"
          >
            1
          </button>
          <button
            @click="pressed('2')"
            class="border text-gray-600 text-center p-2 rounded shadow text-2xl"
          >
            2
          </button>
          <button
            @click="pressed('3')"
            class="border text-gray-600 text-center p-2 rounded shadow text-2xl"
          >
            3
          </button>
          <button
            @click="pressed('+')"
            class="col-span-1 border text-gray-600 p-2 text-2xl rounded shadow"
          >
            +
          </button>
          <button
            @click="pressed('4')"
            class="border text-gray-600 text-center p-2 rounded shadow text-2xl"
          >
            4
          </button>
          <button
            @click="pressed('5')"
            class="border text-gray-600 text-center p-2 rounded shadow text-2xl"
          >
            5
          </button>
          <button
            @click="pressed('6')"
            class="border text-gray-600 text-center p-2 rounded shadow text-2xl"
          >
            6
          </button>
          <button
            @click="pressed('-')"
            class="col-span-1 border text-gray-600 p-2 text-2xl rounded shadow"
          >
            -
          </button>
          <button
            @click="pressed('7')"
            class="border text-gray-600 text-center p-2 rounded shadow text-2xl"
          >
            7
          </button>
          <button
            @click="pressed('8')"
            class="border text-gray-600 text-center p-2 rounded shadow text-2xl"
          >
            8
          </button>
          <button
            @click="pressed('9')"
            class="border text-gray-600 text-center p-2 rounded shadow text-2xl"
          >
            9
          </button>
          <button
            @click="pressed('*')"
            class="col-span-1 border text-gray-600 p-2 text-2xl rounded shadow"
          >
            *
          </button>
          <button
            @click="pressed('c')"
            class="border text-gray-600 text-center text-2xl p-2 rounded shadow"
          >
            C
          </button>
          <button
            @click="pressed('0')"
            class="border text-gray-600 text-center text-2xl p-2 rounded shadow"
          >
            0
          </button>
          <button
            @click="pressed('=')"
            class="col-span-1 border text-gray-600 p-2 text-2xl rounded shadow"
          >
            =
          </button>
          <button
            @click="pressed('/')"
            class="col-span-1 border text-gray-600 p-2 text-2xl rounded shadow"
          >
            /
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import useWindowEvent from "../utilities/hooks/useWindowEvent";
import { ref } from "vue";
export default {
  setup() {
    const previousNums = ref("");
    const currentNums = ref("");
    const currentOperator = ref("");
    const operators = ["+", "-", "*", "/"];
    const inputData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    // Input value mangement
    function pressed(value) {
      if (value == "=" || value == "Enter") calculate();
      else if (operators.includes(value)) operation(value);
      else if (value == "c") clearNum();
      else if (inputData.includes(value)) typedNums(value);
    }

    // Calculations stractures and condition manage
    const calculate = () => {
      if (previousNums.value && currentOperator.value) {
        if (currentOperator.value == "+") sum();
        else if (currentOperator.value == "-") minus();
        else if (currentOperator.value == "*") multiply();
        else if (currentOperator.value == "/") divide();
        previousNums.value = "";
        currentOperator.value = "";
      }
    };

    // Operator and data management
    const operation = (operator) => {
      if (operator) {
        calculate();
        previousNums.value = currentNums.value;
        currentOperator.value = operator;
        currentNums.value = "";
      }
    };

    // Operations are happend here
    //Sumetions are managed here
    const sum = () => (currentNums.value = +previousNums.value + +currentNums.value);

    //Substracts are managed here
    const minus = () => (currentNums.value = +previousNums.value - +currentNums.value);

    // Multiply are managed here
    const multiply = () => (currentNums.value = +previousNums.value * +currentNums.value);

    // Division are managed here
    const divide = () => (currentNums.value = +previousNums.value / +currentNums.value);

    // Cleared data
    const clearNum = () => (
      (currentNums.value = ""), (previousNums.value = ""), (currentOperator.value = "")
    );

    // Input data are serve from here
    const typedNums = (value) => (currentNums.value = currentNums.value + value);
    /*
     * Keyboard  control system register
     */
    const handleKeydown = (e) => pressed(e.key);
    useWindowEvent("keydown", handleKeydown);
    // Needed will be passed by here
    return { currentNums, previousNums, currentOperator, pressed };
  },
};
</script>
<style lang=""></style>
