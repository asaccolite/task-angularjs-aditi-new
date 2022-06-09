

var app = angular.module('myapp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        template : `<div class="jumbotron jumbotron-fluid pb-1">

        <div class="container">
            <h1 class='text-center mb-4'>List Of Employees</h1>
           
         </div>
       
         <centre>
         <ol>
             <li ng-repeat="x in alldata" ng-click="selectEmp(x)" ><a href="#!user">{{x.name}}</a></li>
         </ol>
         
        </centre>


    </div>`
       
    })
    .when('/user', {
        template : `<div class="jumbotron jumbotron-fluid pb-1">
    
        <div class="container">
            <h1 class='text-center mb-4'>User Details</h1>
            
        <table   ng-app='myapp' ng-controller='UserDetailCOntroller' class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">username</th>
                <th scope="col">address</th>
                <th scope="col">phone</th>
                <th scope="col">company</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  {{details.id}}
                </th>
                <td>
                    {{details.name}}
                </td>
                <td>
                    {{details.username}}
                </td>
                <td>
                    {{details.address.street+", "+details.address.city}}
                </td>
                <td>
                    {{details.phone}}
                </td>
                <td>
                    {{details.company.name}}
                </td>
              </tr>
            </tbody>
          </table>
         </div>
         </div>`,
         controller : 'UserDetailCOntroller'
        
        
    })
}]);

 
console.log("Aditi")
const url = 'https://jsonplaceholder.typicode.com/users'
app.controller('mycontroller', function($scope, $http) {
    $http.get(url).then(function(response) {
         console.log(response)
        $scope.alldata = response.data;
 console.log("Aditi",$scope.alldata[0].name)
    }, function(err) {
        console.log(err)
    })

    /*$scope.countrywise = function() {
        country = $scope.country
        $http.get(url + `/countries/` + country).then(function(response) {
            console.log(response.data)
            $scope.alldataCountryWise = response.data
        }, function(err) {
            console.log(err)
        })

    }*/

    $scope.selectEmp=function(x)
    {
        window.localStorage.setItem("selectedUser",JSON.stringify(x));
     
    }


})
app.controller('UserDetailCOntroller',function($scope){
    $scope.details=JSON.parse(window.localStorage.getItem("selectedUser") );
    console.log($scope.details);
})