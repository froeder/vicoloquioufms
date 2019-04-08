<template>
    <q-page padding>
        <span class="text-weight-thin">Usuários</span>
       
        <q-table
            grid
            :data="usuarios"
            :columns="columns"
            class="tabela"
            style="color:white"
            row-key="nome"
            :pagination.sync="paginationControl"
            loading-label="Carregando"
            :loading="loading"
            no-data-label="Carregando"
            rows-per-page-label="Linhas por página"
            >
            <q-tr style="color:white" slot="body" slot-scope="props" :props="props" class="cursor-pointer">
                <q-td v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.value }}
                </q-td>
                <q-td>
                <q-icon name="visibility" @click.native="visualizar(props.row)"></q-icon>
                <span style="margin-left:1em"></span>
                <q-icon name="edit" @click.native="editar(props.row)"></q-icon>
                </q-td>
            </q-tr>
        </q-table>
            
    </q-page>
</template>

<script>

export default {
    data(){
        return{
            usuarios: [],
            loading: true,
            paginationControl : { rowsPerPage: 50, page: 1 },
             columns: [
                {
                name      : 'nome',
                required  : true,
                label     : 'Nome',
                align     : 'left',
                field     : 'nome',
                sortable  : true,
                },
                {
                name      : 'email',
                required  : true,
                label     : 'Email',
                align     : 'left',
                field     : 'email',
                sortable  : true,
                },
                {
                name      : 'instituicao',
                required  : true,
                label     : 'Instituição',
                align     : 'left',
                field     : 'instituicao',
                sortable  : true,
                }
            ],
        }
    },
    mounted(){
        this.pegarUsuarios()
    },
    methods:{
        pegarUsuarios(){
            this.$firebase
                .firestore()
                .collection('usuarios')
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        let dado = doc.data()
                        this.usuarios.push(dado)
                    })
                    
                }).then(this.loading = false)
        }
    }

}
</script>

<style>

</style>
