
// var vm = new Vue({
//     el:'#app',
//     data:{
//         message: "local data",
//     },
//     methods:{
//         getRemoteMessage()
//         {
//             Promise.resolve("Get Remote Data")
//             .then((res)=>{
//                 this.message = res;
//             });
//         }
//     }
// });

// new Vue({
//     el: '#app2',
//     data: function() 
//     {
//         return { visible: false }
//     }
// })

// function clickButton() {    // 2. trigger event in Vue instance
//     Promise.resolve("Get remote data by outside button.") // 3. Get data asynchronously
//         .then((res) => {    // 4. Return result
//             vm.message = res; // 5. Change View Model
//         });
// }


var equipmentvue = new Vue({
    el: '#Equipment',
    data: 
    {
        input: "yoyo",
        somthing: 1,
    },
    methods:{
        OpenEquipEffectDialog()
        {
            this.EquipEffectDialogVisible = true;
            this.somthing++;
        }
    }
})

var EquipEffectDiaVue = new Vue({
    el: '#EquipEffectDia',
    data() {
        return {
            EquipEffectDialogVisible: false,
        }
    }
})

EquipEffectDiaVue.EquipEffectDialogVisible = false;