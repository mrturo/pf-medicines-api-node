select
  su.msub_id,
  su.msub_name
from
  public.pf_med_substance su
order by
  su.msub_id asc;