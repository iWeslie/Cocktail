import Data.List

numUniques :: (Eq a) => [a] -> Int
numUniques = length . nub

import Data.List (nub, sort)
import Data.List hiding (nub)
import qualified Data.Map
import qualified Data.Map as M

-- search :: (Eq a) => [a] -> [a] -> Bool
-- search needle haystack =
--     let nlen = length needle
--     in foldl (\acc x -> if take nlen x == needle then True else acc)
--         False (tails haystack)

-- make our own modules
module Geometry
    ( sphereVolumn
    , sphereArea
    , cubeVolum
    , cubeArea
    , cuboidArea
    , cuboidVolumn
    ) where

sphereVolume :: Float -> Float
sphereVolume radius = (4.0 / 3.0) * pi * (radius ^ 3)

sphereArea :: Float -> Float
sphereArea radius = 4 * pi * (radius ^ 2)

cubeVolume :: Float -> Float
cubeVolume side = cuboidVolume side side side

cubeArea :: Float -> Float
cubeArea side = cuboidArea side side side

cuboidVolume :: Float -> Float -> Float -> Float
cuboidVolume a b c = rectangleArea a b * c

cuboidArea :: Float -> Float -> Float -> Float
cuboidArea a b c = rectangleArea a b * 2 + rectangleArea a c * 2 + rectangleArea c b * 2

rectangleArea :: Float -> Float -> Float
rectangleArea a b = a * b
