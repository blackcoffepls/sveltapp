<script>
    import PollStore from '../stores/PollStore.js'
    import Button from '../shared/Button.svelte'
    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();

    let fields = {question:'', answerA:'', answerB:''}
    let errors = {question:'', answerA:'', answerB:''}
    let valid = false

    const submitHandler = () => {
        valid = true

        //validate question
        if (fields.question.trim().length < 5) {
            valid = false
            errors.question = 'Question must be at least 5 characters long'
        } else {
            errors.question = ''
        }

        //validate answerA
        if (fields.answerA.trim().length < 1) {
            valid = false
            errors.answerA = 'Cannot be empty'
        } else {
            errors.answerA = ''
        }

        //validate answerB
        if (fields.answerB.trim().length < 1) {
            valid = false
            errors.answerB = 'Cannot be empty'
        } else {
            errors.answerB = ''
        }

        //add new poll
        if (valid) {
            let poll = {...fields, votesA: 0, votesB: 0, id:Math.random()}
            //add new poll to store
            PollStore.update( currentPolls => {
                return [poll, ...currentPolls]
            })
            dispatch('add')
        }


    }

</script>

<form on:submit|preventDefault={submitHandler}>

    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="error">{errors.question}</div>
    </div>

    <div class="form-field">
        <label for="answerA">Answer A:</label>
        <input type="text" id="answerA" bind:value={fields.answerA}>
        <div class="error">{errors.answerA}</div>
    </div>

    <div class="form-field">
        <label for="answerB">AnswerB:</label>
        <input type="text" id="answerB" bind:value={fields.answerB}>
        <div class="error">{errors.answerB}</div>
    </div>

    <Button flat={true} type={'secondary'}>Add Poll</Button>

</form>

<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-field {
        margin: 18px auto;
    }
    input {
        width: 100%;
        border-radius: 3px;
    }
    label {
        margin: 10px auto;
        text-align: left;
    }

    .error {
        font-weight: bold;
        font-size: 12px;
        color: red;
    }
</style>