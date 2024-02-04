select
  su.msub_id,
  su.msub_name
from
  public.pf_med_substance su
where
  su.msub_id = $1
order by
  su.msub_id asc;