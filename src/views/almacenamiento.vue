<template>
    <div class="almacenamiento">
        
        <Almacenamiento/>
    </div>
</template>


<script>
// @ is an alias to /src

import Almacenamiento from '../components/almacenamiento.vue'


export default {
    name: 'almacenamiento',
    components: {
        
        Almacenamiento//hacemos llamado a la importacion
    }
}
</script>