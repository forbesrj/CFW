/**
 * Created by Ryan on 8/29/2014.
 */
function HeaderController($scope, $location)
{
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}