<template>
<table class="table table-dark table-striped pt-4 mt-3">
    <thead>
        <th>id</th>
        <th>Data rozpoczęcia</th>
        <th>Data zakończenia</th>
        <th>Nazwa prelekcji</th>
        <th>Prowadzacy</th>
        <th>Opis</th>
        <th>Akcje</th>
    </thead>
    <tbody>
        <tr class="align-middle">
            <td><slot name="id"></slot></td>
            <td><slot name="startdate"></slot></td>
            <td><slot name="stopdate"></slot></td>
            <td><slot name="name"></slot></td>
            <td><slot name="author"></slot></td>
            <td><slot name="description"></slot></td>
            <td>
                <span><button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRow" >Zapisz</button></span>
                <!-- <span><button class="btn btn-danger" type="button" data-bs-toggle="collapse" data-bs-target="`#row<slot></slot>`" >Anuluj</button></span> -->
                <slot name="button"></slot>
            </td>
        </tr>
    </tbody>

</table>
</template>

<script>
export default {

}
</script>

<style lang ="scss">

</style>