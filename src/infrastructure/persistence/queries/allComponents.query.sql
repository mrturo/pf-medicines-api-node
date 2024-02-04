select
  co.mcomp_id,
  co.mcomp_grams,
  co.msub_id,
  co.mbpr_id
from
  public.pf_med_component co
order by
  co.mcomp_id asc;