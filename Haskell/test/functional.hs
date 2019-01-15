-- twice :: (a -> a) -> (a -> a)
-- twice f = f . f
--
-- f :: Num a => a -> a
-- f = subtract 3
--
-- main :: IO ()
-- main = print (twice f 7)

-- twice f = f . f
-- main = print $ twice (+3) 7

multThree :: (Num a) => a -> a -> a -> a
multThree x y z = x * y * z
multTwoWithNine = multThree 9
multWithEighteen = multTwoWithNine 2

compareWithHundred :: (Num a, Ord a) => a -> Ordering
compareWithHundred = compare 100

dividedByTen :: (Floating a) => a -> a
dividedByTen = (/10)

applyTwice :: (a -> a) -> a -> a
applyTwice f x = f (f x)

zipWith' :: (a -> b -> c) -> [a] -> [b] -> [c]
zipWith' _ [] _ = []
zipWith' _ _ [] = []
zipWith' f (x:xs) (y:ys) = f x y : zipWith' f xs ys

flip' :: (a -> b -> c) -> (b -> a -> c)
-- flip' f y x = f x y
flip' f = \x y -> f y x
-- zipWith (flip' div) [2,2..] [10,8,6,4,2]

map' :: (a -> b) -> [a] -> [b]
map' _ [] = []
map' f (x:xs) = f x : map' f xs

filter' :: (a -> Bool) -> [a] -> [a]
filter' _ [] = []
filter' p (x:xs)
    | p x       = x : filter' p xs
    | otherwise = filter' p xs

quickSort :: (Ord a) => [a] -> [a]
quickSort [] = []
quickSort (x:xs) =
    let smallerSorted = quickSort (filter (<=x) xs)
        biggerSorted = quickSort (filter (>=x) xs)
    in smallerSorted ++ [x] ++ biggerSorted

largestDivisible :: (Integral a) => a
largestDivisible = head (filter p [100000, 99999..])
    where p x = x `mod` 3829 == 0


chain :: (Integral a) => a -> [a]
chain 1 = [1]
chain n
    | even n = n:chain (n `div` 2)
    | odd  n = n:chain (n * 3 + 1)

numLongChains :: Int
numLongChains = length (filter isLong (map chain [1..100]))
    where isLong xs = length xs > 15

-- Lambdas Expression
numLongChains' :: Int
numLongChains' = length (filter (\xs -> length xs > 15) (map chain [1..100]))

-- addThree' :: (Num a) => a -> a -> a -> a
-- addThree = \x -> \y -> \z -> x + y + z

sum' :: (Num a) => [a] -> a
-- sum' xs = foldl (\acc x -> acc + x) 0 xs
sum' = foldl (+) 0

elem' :: (Eq a) => a -> [a] -> Bool
elem' y ys = foldl (\acc x -> if x == y then True else acc) False ys

map'' :: (a -> b) -> [a] -> [b]
map'' f xs = foldr (\x acc -> f x : acc) [] xs

-- Function application with $
-- ($) :: (a -> b) -> a -> b
-- f $ x = f x

-- Function composition
-- (.) :: (b -> c) -> (a -> b) -> a -> c
-- f . g = \x -> f (g x)

fn = ceiling . negate . tan . cos . max 50

oddSquareSum :: Integer
oddSquareSum = sum . takeWhile (<10000) . filter odd . map (^2) $ [1..]
