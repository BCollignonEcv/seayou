<template>
    <div>
        <div class="gameInterface-component">
            <el-game-option />
            <div class="gameChat">
                <el-chat />
            </div>
        </div>
    </div>
</template>

<script>
import elChat from '@/components/gameElements/elChat'
import elGameOption from '@/components/gameElements/elGameOption'
export default {
    components: { 
        'el-chat': elChat, 
        'el-game-option': elGameOption 
    },
}
</script>

<style>
    .gameInterface-component{
        height: 100%;
        width: 30vw;
        padding: 46px;
        position: absolute;
        right: 0;
    }

    .gameChat{
        position: relative;
        height: 95%;
    }
</style>