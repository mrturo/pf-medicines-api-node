select
  us.user_id,
  us.user_name
from
  public.pf_user us
where
  us.user_id = $1
order by
  us.user_id asc;