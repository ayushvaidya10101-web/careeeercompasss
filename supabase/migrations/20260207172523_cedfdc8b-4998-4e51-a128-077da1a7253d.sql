
-- Drop the existing SELECT policy that doesn't restrict to authenticated role
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

-- Recreate with explicit TO authenticated restriction
CREATE POLICY "Users can view their own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);
