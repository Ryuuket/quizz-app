<script>
	let question = '';
	let answertrue = '';
	let answerFalse1 = '';
	let answerFalse2 = '';
	let answerFalse3 = '';

	function handleSubmit() {
		console.log(`Submitting:
        question: ${question},
        answer true: ${answertrue},
        answerFalse1: ${answerFalse1}
        answerFalse2: ${answerFalse2}
        answerFalse3: ${answerFalse3};`);

        question = '';
        answertrue = '';
        answerFalse1 = '';
        answerFalse2 = '';
        answerFalse3 = '';
	}
</script>

<div class="container" style="display: flex; justify-content: center; align-items: center;">
		<div class="form">
			<div class="subtitle">Create a question and four answers</div>
			<div class="input-container ic1">
				<input bind:value={question} class="input" type="text" placeholder=" " />
				<div class="cut"></div>
				<label for="question" class="placeholder">Question</label>
			</div>
			<div class="input-container ic2">
				<input bind:value={answertrue} class="input" type="text" placeholder=" " />
				<div class="cut"></div>
				<label for="answertrue" class="placeholder">Answer true</label>
			</div>
			<div class="input-container ic2">
				<input bind:value={answerFalse1} class="input" type="text" placeholder=" " />
				<div class="cut cut-short"></div>
				<label for="answerFalse1" class="placeholder">Answer False 1</label>
			</div>
			<div class="input-container ic2">
				<input bind:value={answerFalse2} class="input" type="text" placeholder=" " />
				<div class="cut cut-short"></div>
				<label for="answerFalse2" class="placeholder">Answer False 2</label>
			</div>
			<div class="input-container ic2">
				<input bind:value={answerFalse3} class="input" type="text" placeholder=" " />
				<div class="cut cut-short"></div>
				<label for="answerFalse3" class="placeholder">Answer False 3</label>
			</div>
			<button type="button" class="submit" on:click={handleSubmit}>submit</button>
		</div>
</div>
```

<style>
	.form {
		background-color: #0b160b;
		border-radius: 20px;
		height: 1000px;
		padding: 20px;
		width: 1300px;
	}

	.subtitle,
	.placeholder {
		color: #eee;
		font-family: sans-serif;
		font-weight: 100;
    text-align: center;
	}

	.subtitle {
    margin-top: 30px;
		font-size: 55px;
    margin-bottom: 60px;
	}

	.input-container {
		height: 100px;
		position: relative;
		width: 100%;
    margin-bottom: 40px;
	}

	.ic1 {
		margin-top: 20px;
	}

	.ic2 {
		margin-top: 30px;
	}

	.input {
		background-color: #0e3d0e;
		border-radius: 12px;
		border: 0;
		box-sizing: border-box;
		color: #eee;
		font-size: 18px;
		height: 80px;
		outline: 0;
		padding: 4px 10px 0;
		width: 100%;
	}

	.cut,
	.cut-short {
		background-color: #0b160b;
		border-radius: 10px;
		height: 10px;
		position: absolute;
		top: -20px;
		transition: transform 200ms;
		width: 76px;
	}

	.cut-short {
		width: 30px;
	}

	.input:focus ~ .cut,
	.input:not(:placeholder-shown) ~ .cut {
		transform: translateY(8px);
	}

	.placeholder {
		left: 20px;
		line-height: 14px;
		pointer-events: none;
		position: absolute;
		transform-origin: 0 50%;
		transition:
			transform 200ms,
			color 200ms;
		top: 20px;
	}

	.input:focus ~ .placeholder,
	.input:not(:placeholder-shown) ~ .placeholder {
		transform: translateY(-30px) translateX(10px) scale(0.75);
	}

	.input:not(:placeholder-shown) ~ .placeholder,
	.input:focus ~ .placeholder {
		color: #f3ce68;
	}

	.submit {
		background-color: #e4ab0e;
		border-radius: 12px;
		border: 0;
		box-sizing: border-box;
		color: #000000;
		cursor: pointer;
		font-size: 35px;
    font-weight: bold;
		height: 60px;
		margin-top: 38px;
		text-align: center;
		width: 100%;
	}

	.submit:active {
		background-color: rgb(187, 90, 0);
	}
</style>
