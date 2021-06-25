<template>
    <div>
        <div class="chat-component">
            <div class="chat-global">
                <h5>Chat</h5>
                <p v-for="(message, index) in chatGlobal" :key="index" class="message"><span>Pseudo : </span>{{message}}</p>
            </div>
            <div class="chat-input flex justify-between">
                <input type="text" placeholder="Ecrire un message" v-model="newMessage">
                <button class="btn-interface clickable fourth">
                    <img class="btn-icon" src="/static/img/icons/chat-vocal.svg">
                </button>
                <button class="btn-interface clickable fourth" @click="addMessage">
                    <img class="btn-icon" src="/static/img/icons/chat-ecrit.svg">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newMessage: "",
            chatGlobal: ['Bienvenu sur SeaYou', 'Le debat commence !']
        }
    },
    methods: {
        addMessage: function() {
            this.chatGlobal.push(this.newMessage)
            this.newMessage = ""
        }
    }
}
</script>

<style scoped>
    .chat-component{
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .chat-component > *{
        background-color: var(--color-secondary);
        border-radius: 25px;
    }

    .chat-component .chat-global{
        background-color: var(--color-secondary);
        height: 70vh;
        margin-bottom: 12px;
        padding: 24px;
    }

    .chat-component .chat-global .message{
        padding: 4px 0;
    }

    .chat-component .chat-global .message span{
        font-weight: bold;
        color: var(--color-primary);
    }

    .chat-component h5{
        font-size: 1.8rem;
        margin: 0 0 12px 0;
    }

    .chat-input {
        padding: 4px;
    }

    .chat-input .btn-interface{
        margin: 0 5px;
    }

    .chat-component .chat-input input[type="text"], .chat-component .chat-input input[type="text"]::placeholder{
        background-color: var(--color-secondary);
        color: var(--color-fourth);
        width: 70%;
        text-align: left;
    }

    
</style>