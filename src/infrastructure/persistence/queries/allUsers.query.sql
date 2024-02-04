select
  us.user_id,
  us.user_name
from
  public.pf_user us
order by
  us.user_id asc;