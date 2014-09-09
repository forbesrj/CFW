/**
 * Created by Ryan on 8/29/2014.
 */
function HeaderController($scope, $location, $anchorScroll)
{
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}

function AboutController($scope, $location, $anchorScroll){

    $scope.goToTop = function() {
        $location.hash('top');
        $anchorScroll();
    };
}